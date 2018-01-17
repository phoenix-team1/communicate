# automatically generated by the FlatBuffers compiler, do not modify

# namespace: grouppack

import flatbuffers

class T_GROUP_CREATE_RQ(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_GROUP_CREATE_RQ(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_GROUP_CREATE_RQ()
        x.Init(buf, n + offset)
        return x

    # T_GROUP_CREATE_RQ
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_GROUP_CREATE_RQ
    def SRqHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RQ_HEAD import S_RQ_HEAD
            obj = S_RQ_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_GROUP_CREATE_RQ
    def GroupName(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GROUP_CREATE_RQ
    def GroupImgUrl(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GROUP_CREATE_RQ
    def GroupRemark(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_GROUP_CREATE_RQ
    def GroupCt(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int64Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_CREATE_RQ
    def GroupType(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(14))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int32Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_CREATE_RQ
    def OfflineGroupMsg(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(16))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from .T_OFFLINE_GROUP_MSG import T_OFFLINE_GROUP_MSG
            obj = T_OFFLINE_GROUP_MSG()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

def T_GROUP_CREATE_RQStart(builder): builder.StartObject(7)
def T_GROUP_CREATE_RQAddSRqHead(builder, sRqHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRqHead), 0)
def T_GROUP_CREATE_RQAddGroupName(builder, groupName): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(groupName), 0)
def T_GROUP_CREATE_RQAddGroupImgUrl(builder, groupImgUrl): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(groupImgUrl), 0)
def T_GROUP_CREATE_RQAddGroupRemark(builder, groupRemark): builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(groupRemark), 0)
def T_GROUP_CREATE_RQAddGroupCt(builder, groupCt): builder.PrependInt64Slot(4, groupCt, 0)
def T_GROUP_CREATE_RQAddGroupType(builder, groupType): builder.PrependInt32Slot(5, groupType, 0)
def T_GROUP_CREATE_RQAddOfflineGroupMsg(builder, offlineGroupMsg): builder.PrependUOffsetTRelativeSlot(6, flatbuffers.number_types.UOffsetTFlags.py_type(offlineGroupMsg), 0)
def T_GROUP_CREATE_RQEnd(builder): return builder.EndObject()