# automatically generated by the FlatBuffers compiler, do not modify

# namespace: grouppack

import flatbuffers

class T_GROUP_GET_USER_REMARK_NAME_RS(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_GROUP_GET_USER_REMARK_NAME_RS(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_GROUP_GET_USER_REMARK_NAME_RS()
        x.Init(buf, n + offset)
        return x

    # T_GROUP_GET_USER_REMARK_NAME_RS
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_GROUP_GET_USER_REMARK_NAME_RS
    def SRsHead(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .S_RS_HEAD import S_RS_HEAD
            obj = S_RS_HEAD()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_GROUP_GET_USER_REMARK_NAME_RS
    def GroupId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_GROUP_GET_USER_REMARK_NAME_RS
    def UserRemarkName(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

def T_GROUP_GET_USER_REMARK_NAME_RSStart(builder): builder.StartObject(3)
def T_GROUP_GET_USER_REMARK_NAME_RSAddSRsHead(builder, sRsHead): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(sRsHead), 0)
def T_GROUP_GET_USER_REMARK_NAME_RSAddGroupId(builder, groupId): builder.PrependUint64Slot(1, groupId, 0)
def T_GROUP_GET_USER_REMARK_NAME_RSAddUserRemarkName(builder, userRemarkName): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(userRemarkName), 0)
def T_GROUP_GET_USER_REMARK_NAME_RSEnd(builder): return builder.EndObject()
