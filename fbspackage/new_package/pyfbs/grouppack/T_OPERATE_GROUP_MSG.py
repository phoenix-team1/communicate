# automatically generated by the FlatBuffers compiler, do not modify

# namespace: grouppack

import flatbuffers

class T_OPERATE_GROUP_MSG(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsT_OPERATE_GROUP_MSG(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = T_OPERATE_GROUP_MSG()
        x.Init(buf, n + offset)
        return x

    # T_OPERATE_GROUP_MSG
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # T_OPERATE_GROUP_MSG
    def MsgTime(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint64Flags, o + self._tab.Pos)
        return 0

    # T_OPERATE_GROUP_MSG
    def OperateUserName(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # T_OPERATE_GROUP_MSG
    def UserInfoList(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from .USER_BASE_INFO import USER_BASE_INFO
            obj = USER_BASE_INFO()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # T_OPERATE_GROUP_MSG
    def UserInfoListLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # T_OPERATE_GROUP_MSG
    def GroupModifyContent(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

def T_OPERATE_GROUP_MSGStart(builder): builder.StartObject(4)
def T_OPERATE_GROUP_MSGAddMsgTime(builder, msgTime): builder.PrependUint64Slot(0, msgTime, 0)
def T_OPERATE_GROUP_MSGAddOperateUserName(builder, operateUserName): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(operateUserName), 0)
def T_OPERATE_GROUP_MSGAddUserInfoList(builder, userInfoList): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(userInfoList), 0)
def T_OPERATE_GROUP_MSGStartUserInfoListVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def T_OPERATE_GROUP_MSGAddGroupModifyContent(builder, groupModifyContent): builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(groupModifyContent), 0)
def T_OPERATE_GROUP_MSGEnd(builder): return builder.EndObject()